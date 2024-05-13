import React from 'react'
import './main.css'
import arrowDown from "../images/arrowDown.png"
import Checkbox from '@mui/material/Checkbox';
import LensOutlinedIcon from '@mui/icons-material/LensOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import SettingsIcon from '@mui/icons-material/Settings';
import checkIcon from "../images/Vector (1).png"
const Main = () => {
    return (
        <div className='main'>
            <div className='mainContainer'>
                <div className='mainleft'>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <p className='mainleftText'>Device ID Connected</p>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "29.97px" }}>
                            <div style={{ display: "flex" }}>
                                <p style={{ width: "171px", height: "37.65px", top: " 52.29px", fontSize: "20px", fontweight: "600", fontFamily: "Open Sans, sans-serif", lineHeight: "27.24px", textAlign: "center", color: "#5A5A5A" }}>MBS00007</p>
                                <img src={arrowDown} alt="" style={{ width: "11.27px", height: "11.5px", marginTop: "20px", cursor: "pointer" }} />
                            </div>

                            <div style={{ width: "109px", height: "39.74px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "21.79px", textAlign: "center", color: "#8D9598" }}>Temp:</p>
                                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "20px", fontweight: "400", lineHeight: "27.24px", textalign: "center", color: "#184A7C" }}>37.5 C</p>
                            </div>

                        </div>
                    </div>

                    <div style={{
                        width: "129px", height: "173px", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"
                    }}>
                        <div>
                            <Checkbox defaultChecked color="default" /><span style={{ fontFamily: "Open Sans, sans-serif", fontSize: "20px", fontWeight: "700", lineHeight: "27.24px", textAlign: "center", color: "#184A7C" }}>Select</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}><LensOutlinedIcon style={{ width: "18px", height: "18px" }} /><span>White</span></div>
                            <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}><PlayArrowIcon style={{ width: "24px", height: "24px" }} /><span>Start</span></div>
                            <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}><StopIcon style={{ width: "24px", height: "24px" }} /><span>Stop</span></div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
                            <SettingsIcon /><span style={{ fontFamily: "Open Sans, sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "21.79px", textAlign: "left", color: "#8D9598" }}>Device Settings</span>
                        </div>
                    </div>
                </div>

                <div className='mainRight'>
                    <div className='cardContainer'>
                        <div className='card'>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                <p className='cardText'>01</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button className='takeWhite'>Take White</button>
                                <button className='start'>Start</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                <p className='cardText'>02</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button style={{ background: "#E7E6E6", width: "106.35px", height: "44.05px", left: "492.28px", borderRadius: "2px 0px 0px 0px", border: "none", fontFamily: "Open Sans, sans-serif", fontSize: "32px", fontWeight: "600", lineHeight: "43.58px", textAlign: "end", color: "#184A7C", }}>03</button>
                                <button style={{ background: "#B3D5FF", width: "106.35px", height: "44.05px", left: "492.28px", borderRadius: "2px 0px 0px 0px", border: "none", fontFamily: "Open Sans, sans-serif", fontSize: "32px", fontWeight: "600", lineHeight: "43.58px", textAlign: "start", color: "#184A7C" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <span>:34</span>
                                        <span style={{ fontFamily: "Open Sans, sans-serif", fontSize: "17px", fontWeight: '400', lineHeight: "27.24px", textAlign: "center", paddingRight: "4px" }}>25%</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div style={{ width: "210px", height: "136.28px", borderRadius: "2px 0px 0px 0px", border: "1px solid #E6E6E6", display: "flex", flexDirection: "column", gap: "0px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                <p className='cardText'>03</p>
                                <div>
                                    <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "20px", fontWeight: "600", lineHeight: "27.24px", textAlign: "center", color: "#184A7C" }}>Stop?</p>
                                    <p className='cardSubText'>TSRT1425</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", border: "2px solid #184A7C" }}>
                                <button className='takeWhite'>Yes</button>
                                <button className='start'>No</button>
                            </div>
                        </div>

                        <div style={{ width: "210px", height: "136.28px", borderRadius: "2px 0px 0px 0px", display: "flex", flexDirection: "column", gap: '24px', border: "1px solid #00A81459" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                <p className='cardText'>04</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button style={{ width: "231.96px", height: "44px", borderRadius: "2px 0px 0px 0px", background: "#00A814", color: "white", border: "none", fontFamily: "Open Sans, sans-serif", fontSize: "32px", fontWeight: "600", lineHeight: "43.58px", textAlign: "center" }}>03:34</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
                                <p className='cardText'>05</p>
                                <p style={{
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "16px",
                                    fontStyle: "italic",
                                    fontWeight: "400",
                                    lineHeight: "21.79px",
                                    textAlign: "center",
                                    color: "#8D9598"

                                }}>Enter Sample Name</p>
                            </div>
                            <div className='cardButton'>
                                <button className='takeWhite'>Take White</button>
                                <button className='start'>Start</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>05</p>
                                <p style={{
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "16px",
                                    fontStyle: "italic",
                                    fontWeight: "400",
                                    lineHeight: "21.79px",
                                    textAlign: "center",
                                    color: "#8D9598"

                                }}>Enter Sample Name</p>
                            </div>
                            <div className='cardButton'>
                                <button className='takeWhite'>Take White</button>
                                <button className='start'>Start</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            border: "1px solid #E6E6E6",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>03</p>
                                <div>
                                    <p style={{
                                        fontFamily: "Open Sans, sans-serif",
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        lineHeight: "27.24px",
                                        textAlign: "center",
                                        color: "#184A7C"

                                    }}>White?</p>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                border: "2px solid #184A7C"
                            }}>
                                <button className='takeWhite'>Yes</button>
                                <button className='start'>No</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: '24px',
                            border: "1px solid #00A81459"
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>04</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button style={{
                                    width: "231.96px",
                                    height: "44px",
                                    borderRadius: "2px 0px 0px 0px",
                                    background: "#00A814",
                                    color: "white",
                                    border: "none",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    lineHeight: "43.58px",
                                    textAlign: "center",


                                }}>03:34</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>01</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button className='takeWhite'>Take White</button>
                                <button className='start'>Start</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>02</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button style={{
                                    background: "#E7E6E6",
                                    width: "106.35px",
                                    height: "44.05px",
                                    left: "492.28px",
                                    borderRadius: "2px 0px 0px 0px",
                                    border: "none",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    lineHeight: "43.58px",
                                    textAlign: "end",
                                    color: "#184A7C",


                                }}>03</button>
                                <button style={{
                                    background: "#B3D5FF",
                                    width: "106.35px",
                                    height: "44.05px",
                                    left: "492.28px",
                                    borderRadius: "2px 0px 0px 0px",
                                    border: "none",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    lineHeight: "43.58px",
                                    textAlign: "start",
                                    color: "#184A7C"

                                }}>
                                    <div style={{
                                        display: "flex", alignItems: "center", justifyContent: "space-between"
                                    }}>
                                        <span>:34</span>
                                        <span style={{
                                            fontFamily: "Open Sans, sans-serif",
                                            fontSize: "17px",
                                            fontWeight: '400',
                                            lineHeight: "27.24px",
                                            textAlign: "center",
                                            paddingRight: "4px"
                                        }}>25%</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            border: "1px solid #E6E6E6",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>03</p>
                                <div>
                                    <p style={{
                                        fontFamily: "Open Sans, sans-serif",
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        lineHeight: "27.24px",
                                        textAlign: "center",
                                        color: "#184A7C"
                                    }}>Stop?</p>
                                    <p className='cardSubText'>TSRT1425</p>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                border: "2px solid #184A7C"
                            }}>
                                <button className='takeWhite'>Yes</button>
                                <button className='start'>No</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: '24px',
                            border: "1px solid #00A81459"
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>04</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button style={{
                                    width: "231.96px",
                                    height: "44px",
                                    borderRadius: "2px 0px 0px 0px",
                                    background: "#00A814",
                                    color: "white",
                                    border: "none",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    lineHeight: "43.58px",
                                    textAlign: "center",


                                }}>03:34</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            border: "1px solid #E6E6E6",
                            display: "flex",
                            flexDirection: "column",
                            gap: '24px',
                            background: "#E6E6E642",
                            opacity: "90%"
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>01</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div style={{
                                display: "flex",
                                background: "#E6E6E642",
                                opacity: "26%"
                            }}>
                                <button style={{
                                    cursor: "pointer",
                                    width: "116.1px",
                                    height: "44px",
                                    borderradius: "0px 0px 0px 2px",
                                    border: "none",
                                    background: " #FFFFFF",
                                    color: "#184A7C",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    lineHeight: "27.24px",
                                    textAlign: "center",
                                }}>Take White</button>
                                <button className='start'>Start</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            border: "1px solid #E6E6E6",
                            display: "flex",
                            flexDirection: "column",
                            gap: '24px',
                            background: "#E6E6E6C4",
                            opacity: "77%",
                            position: "relative"
                        }}>
                            <img src={checkIcon} alt="" className='check' />
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>01</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div style={{
                                display: "flex",
                                background: "#E6E6E6C4",
                                opacity: "77%"
                            }}>
                                <button style={{
                                    cursor: "pointer",
                                    width: "116.1px",
                                    height: "44px",
                                    borderradius: "0px 0px 0px 2px",
                                    border: "none",
                                    background: " #FFFFFF",
                                    color: "#184A7C",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    lineHeight: "27.24px",
                                    textAlign: "center",
                                }}>Take White</button>
                                <button className='start'>Start</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            // border:"2px solid #184A7C",
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>03</p>
                                <div>
                                    <p style={{
                                        fontFamily: "Open Sans, sans-serif",
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        lineHeight: "27.24px",
                                        textAlign: "center",
                                        color: "#184A7C"

                                    }}>Stop?</p>
                                    <p className='cardSubText'>TSRT1425</p>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                border: "2px solid #184A7C",
                                height: "40px",
                            }}>
                                <button style={{
                                    cursor: "pointer",
                                    width: "116.1px",
                                    height: "37px",
                                    borderRadius: " 0px 0px 0px 2px",
                                    border: "1px solid #184A7C40",
                                    background: " #FFFFFF",
                                    color: " #184A7C",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    lineHeight: "27.24px",
                                    textAlign: "center",
                                }}>Yes</button>
                                <button style={{
                                    cursor: "pointer",
                                    width: "116.1px",
                                    height: "37px",
                                    borderRadius: " 0px 0px 0px 2px",
                                    border: "1px solid #184A7C40",
                                    background: " #184A7C",
                                    color: " #FFFFFF",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    lineHeight: "27.24px",
                                    textAlign: "center",
                                }}>No</button>
                            </div>
                        </div>

                        <div style={{
                            width: "210px",
                            height: "136.28px",
                            borderRadius: "2px 0px 0px 0px",
                            display: "flex",
                            flexDirection: "column",
                            gap: '24px',
                            border: "none"
                        }}>
                            <div style={{
                                display: "flex", flexDirection: "column", gap: "14px"
                            }}>
                                <p className='cardText'>04</p>
                                <p className='cardSubText'>TSRT1425</p>
                            </div>
                            <div className='cardButton'>
                                <button style={{
                                    width: "231.96px",
                                    height: "44px",
                                    borderRadius: "2px 0px 0px 0px",
                                    background: "#00A814",
                                    color: "white",
                                    border: "none",
                                    fontFamily: "Open Sans, sans-serif",
                                    fontSize: "32px",
                                    fontWeight: "600",
                                    lineHeight: "43.58px",
                                    textAlign: "center",


                                }}>03:34</button>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div >
    )
}

export default Main
