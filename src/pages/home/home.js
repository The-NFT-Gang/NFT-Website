import React, { useEffect, useState, createRef } from 'react';
import { Container, Carousel, Image, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import TeamCard from '../../components/teamCard/teamCard';
import { MEMBERS, CAROUSEL_ITEMS, ROAD_MAP, ABOUT_TEXT, ABOUT_SECTION_IMAGE, ORIGIN_TEXT, ORIGIN_SECTION_IMAGE, COMMUNITY_IMAGES, COMMUNITY_TEXT } from '../../utils';
import './home.css';
import { useDispatch, useSelector } from "react-redux";
import { connect, isWalletConnected } from "./../../redux/blockchain/blockchainActions";
import { fetchData } from "./../../redux/data/dataActions";
import Header from '../../components/header';
import Footer from '../../components/footer';

//Used for contract address
const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function Home() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [isConnectedAndCanMint, setIsConnectedAndCanMint] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
            NAME: "Sloth",
            SYMBOL: "SLO",
            ID: 0,
        },
        NFT_NAME: "Sloths",
        SYMBOL: "SLO",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "opensea",
        MARKETPLACE_LINK: "www.opensea.com",
        SHOW_BACKGROUND: false,
    });

    // start of function for the dapp
    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
                gasLimit: String(totalGasLimit),
                to: CONFIG.CONTRACT_ADDRESS,
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                console.log(receipt);
                setFeedback(
                    `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
            newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(async () => {
        // console.log("HI");
        // const res = await isWalletConnected();
        // console.log(res);
        // setIsConnectedAndCanMint(res.isConnected);
        // blockchain.account = res.account;
        // blockchain.smartContract = res.contract;
        // blockchain.web3 = res.web3;
        // setBloc
    })

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    // References to scroll to positions on home page
    const teamRef = createRef();
    const aboutRef = createRef();
    const mintRef = createRef();
    const roadMapref = createRef();
    const communityRef = createRef()

    const getTeamMembers = () => {
        return (
            MEMBERS.map((member, index) => 
                <Col xl={2} lg={4} md={4} sm={6} key={index}>
                    <TeamCard name={member.name} role={member.role} twitter={member.twitter} picture={member.picture} />
                </Col>
            )
        );
    }


    const getRoadMap = () => {
        return (
            ROAD_MAP.map((item, index) => 
                <Col xl={2} lg={4} md={4} sm={6} key={index}>
                    <RoadMap phase={item.phase} img={item.img} title={item.title} description={item.description}/>
                </Col>
            )
        );
    }

    

    const getCarouselItems = () => {
        return (
            CAROUSEL_ITEMS.map((item, index) =>
                <Carousel.Item key={index}>
                    <img
                        className='w-100'
                        src={item.img}
                        alt={item.alt}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        );
    }

    return (
        <>
            <Header teamRef={teamRef} mintRef={mintRef} aboutRef={aboutRef} communityRef={communityRef} />
            <Carousel>
                {getCarouselItems()}
            </Carousel>
            <div className="about-section">
                <Container className="pt-3 text-white">
                    <Row ref={aboutRef} className='mt-5'>
                        <Col lg={2} md={5} sm={12} xs={12} className='text-center mb-3'>
                            <Image className='w-100 pe-5' src={ABOUT_SECTION_IMAGE.picture} alt={ABOUT_SECTION_IMAGE.alt} />
                        </Col>
                        <Col lg={10} md={7} sm={12} xs={12}>
                            <div className='d-flex justify-content-end flex-column h-100' style={{ "opacity": "1", "transform": "none" }}>
                                <h2 className="mb-3 heading">ABOUT META SLOTHS</h2>
                                <p className="text">{ABOUT_TEXT}</p>
                                <div className='pt-1 pb-3'>
                                    <div style={{ "width": "70%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="pt-5 pb-5 text-white">
                    <Row>
                        <Col className='order-1 order-lg-1' lg={9} md={5} sm={12} xs={12}>
                            <div className='d-flex justify-content-end flex-column h-100' style={{ "opacity": "1", "transform": "none" }}>
                                <h2 className="mb-3 heading">ORIGIN STORY</h2>
                                <p className="text">{ORIGIN_TEXT}</p>
                                <div className='pt-1 pb-3'>
                                    <div style={{ "width": "70%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                                </div>
                            </div>
                        </Col>
                        <Col className='order-1 order-lg-5' lg={3} md={7} sm={12} xs={12}>
                            <Image className='w-100 ps-lg-5' src={ORIGIN_SECTION_IMAGE.picture} alt={ORIGIN_SECTION_IMAGE.alt} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div ref={mintRef}>
                <Container className="mt-5 mb-5 text-white">
                    <h2 className="mb-2 heading text-primary">MINT YOUR META SLOTH</h2>

                    <Row className='mt-5'>
                        <Col xl="2" lg="3" md="4" sm="4">
                            <Image className='w-100' src='/images/samples/pointing.png'></Image>
                        </Col>
                        <Col xl="10" lg="9" md="8" sm="8">
                            <div className='ps-4'>
                                <p className='fs-2 mb-3 heading'>10,000 unique Meta Sloths will be available</p>

                                <p className='heading fs-4 mb-0'>Pre-sale: June 1, 2022 @ 1 PM, EST</p>
                                <p className='heading fs-4 mb-4'>Public sale: June 2, 2022 @ 1 PM EST</p>

                                {!(blockchain && blockchain.account) && <Button className='fs-2 heading' variant="primary" size="lg" onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(connect());
                                    getData();
                                }}>
                                    <FontAwesomeIcon className='fa-fw' icon={faLink} /> CONNECT
                                </Button>}
                                {blockchain && blockchain.account && !claimingNft && !claimingNft && <Button className='fs-2 heading' variant="primary" size="lg" onClick={(e) => {
                                    e.preventDefault();
                                    claimNFTs();
                                    getData();
                                }}>
                                    <FontAwesomeIcon className='fa-fw' icon={faEthereum} /> MINT
                                </Button>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className="pt-5 pb-5 text-white" ref={communityRef}>
                    <Row>
                        <Col lg={7} md={12} xs={12}>
                            <Image src={COMMUNITY_IMAGES[0].picture} alt={COMMUNITY_IMAGES[0].alt} className="pr-5" />
                        </Col>
                        <Col lg={5} sm={12} md={12} xs={12} className="pl-5 ml-5">
                            <div className="pl-5 ml-5">
                                <h2 className="mt-5 heading">JOIN OUR COMMUNITY</h2>
                                <p className='text'>{COMMUNITY_TEXT}</p>
                            </div>
                            <div className='pt-1 pb-3'>
                                <div style={{ "width": "100%", "borderTop": "2px solid rgb(244, 67, 54)" }} />
                            </div>
                            <Row className="d-flex justify-content-center">
                                <Col className="d-flex justify-content-center">
                                    <div className="discord-button-container" style={{ "transform": "none" }}>
                                        <a href="#">
                                            <Image className="discord-button" src={process.env.PUBLIC_URL + '/images/discord.svg'} />
                                        </a>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-center">
                                    <div className="twitter-button-container" style={{ "transform": "none" }}>
                                        <a href="https://twitter.com/theslothsnft">
                                            <Image className="twitter-button" src={process.env.PUBLIC_URL + '/images/twitter.svg'} />
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>



             <div ref={roadMapref} className="roadmap-section pt-5 pb-5">
                <Container className="text-center pb-4">
                    <Row className="text-center pb-5">
                        <h1 className="center text-white heading">Road Map</h1>
                    </Row>
                    <Row className="justify-content-center">
                        {getRoadMap()}
                    </Row>
                </Container>
            </div>



            <div ref={teamRef} className='team-section pt-5 pb-5'>
                <Container className="pb-4">
                    <Row className="text-center pb-5">
                        <h1 className="center text-white heading">TEAM</h1>
                    </Row>
                    <Row className="text-center">
                        {getTeamMembers()}
                    </Row>
                </Container>
            </div>



            <Footer />
        </>
    );
};