import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

//import Button from '@mui/material/Button';

// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import SectionBasics from "../Components/Sections/SectionBasics";
const useStyles = makeStyles(styles);
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
export default function DoctorCalendarPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [calendar, setCalendar] = React.useState("2");
  const [address, setAddress] = React.useState("10");
  const [day, setDay] = React.useState("");
  const handleChange = (event) => {
    setAddress(event.target.value);
    setDay(event.target.value);
    setCalendar(event.target.value);
  };
  // image={require("../../assets/img/logo.png").default}
  const doctor = {
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng",
    pass: "Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai Chủ tịch Hội Thấp khớp học Việt Nam Bác sĩ khám cho người bệnh từ 14 tuổi trở lên",
    tieude: "ĐỊA CHỈ KHÁM",
    ten: "Phòng khám Chuyên khoa Da Liễu",
    diachi: "207 Phố Huế - Hai Bà Trưng - Hà Nội",
    gia: "250.000 VND  ",
    baoHiem: "Bảo y tế",
  };
  return (
    <React.Fragment>
      <CssBaseline />
    
      <Box sx={{ width: "80%", marginLeft:"auto", marginRight:"auto",backgroundColor: "#eeeeee"}}>
      <div>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Khu vực
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={address}
            onChange={handleChange}
            autoWidth
            label="Toàn Quốc"
          >
            <MenuItem value={10}>Toàn Quốc</MenuItem>
            <MenuItem value={11}>Hà Nội</MenuItem>
            <MenuItem value={12}>HCM</MenuItem>
          </Select>
        </FormControl>
      </div>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         
         
         
          <Grid item xs={6}>
            <Item>
              <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid item xs={4}>
                  <div>
                    <div className={classes.div_center}>
                      <img
                        src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                        alt="..."
                        className={classes.imageradios}
                      />
                    </div>
                    <div className={classes.texta}>{doctor.name}</div>
                    <div className={classes.text}>{doctor.pass}</div>
                    <br />
                    <span>
                      <a href="">xem thêm</a>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={classes.selectTime}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={calendar}
                        onChange={handleChange}
                      >
                        <MenuItem value={2}>Thứ 2 - 25/10</MenuItem>
                        <MenuItem value={3}>Thứ 3 - 26/10</MenuItem>
                        <MenuItem value={4}>Thứ 4 - 27/10</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <h3 className={classes.lichkham}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      LỊCH KHÁM
                    </h3>
                  </div>
                  <div className={classes.datlichkham}>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                  </div>
                  <div className={classes.huongdan}>
                    Chọn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    và đặt (miễn phí)
                  </div>
                  <hr />
                  <div className={classes.texta1}>{doctor.tieude}</div>
                  <div className={classes.texta}>{doctor.ten}</div>
                  <div className={classes.text_address}>{doctor.diachi}</div>
                  <div className={classes.text_address}>
                    Giá Khám: {doctor.gia}.
                    <a href="" className={classes.chititet}>
                      {" "}
                      Xem chi tiết
                    </a>
                  </div>
                  <div className={classes.text_address}>
                    Loại Bảo Hiểm áp dụng.
                    <a href="" className={classes.chititet}>
                      Xem chi tiết
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Item>
          </Grid>




          <Grid item xs={6}>
            <Item>
              <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid item xs={4}>
                  <div>
                    <div className={classes.div_center}>
                      <img
                        src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                        alt="..."
                        className={classes.imageradios}
                      />
                    </div>
                    <div className={classes.texta}>{doctor.name}</div>
                    <div className={classes.text}>{doctor.pass}</div>
                    <br />
                    <span>
                      <a href="">xem thêm</a>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={classes.selectTime}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={calendar}
                        onChange={handleChange}
                      >
                        <MenuItem value={2}>Thứ 2 - 25/10</MenuItem>
                        <MenuItem value={3}>Thứ 3 - 26/10</MenuItem>
                        <MenuItem value={4}>Thứ 4 - 27/10</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <h3 className={classes.lichkham}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      LỊCH KHÁM
                    </h3>
                  </div>
                  <div className={classes.datlichkham}>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                  </div>
                  <div className={classes.huongdan}>
                    Chọn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    và đặt (miễn phí)
                  </div>
                  <hr />
                  <div className={classes.texta1}>{doctor.tieude}</div>
                  <div className={classes.texta}>{doctor.ten}</div>
                  <div className={classes.text_address}>{doctor.diachi}</div>
                  <div className={classes.text_address}>
                    Giá Khám: {doctor.gia}.
                    <a href="" className={classes.chititet}>
                      {" "}
                      Xem chi tiết
                    </a>
                  </div>
                  <div className={classes.text_address}>
                    Loại Bảo Hiểm áp dụng.
                    <a href="" className={classes.chititet}>
                      Xem chi tiết
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Item>
          </Grid>





          <Grid item xs={6}>
            <Item>
              <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid item xs={4}>
                  <div>
                    <div className={classes.div_center}>
                      <img
                        src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                        alt="..."
                        className={classes.imageradios}
                      />
                    </div>
                    <div className={classes.texta}>{doctor.name}</div>
                    <div className={classes.text}>{doctor.pass}</div>
                    <br />
                    <span>
                      <a href="">xem thêm</a>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={classes.selectTime}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={calendar}
                        onChange={handleChange}
                      >
                        <MenuItem value={2}>Thứ 2 - 25/10</MenuItem>
                        <MenuItem value={3}>Thứ 3 - 26/10</MenuItem>
                        <MenuItem value={4}>Thứ 4 - 27/10</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <h3 className={classes.lichkham}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      LỊCH KHÁM
                    </h3>
                  </div>
                  <div className={classes.datlichkham}>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                  </div>
                  <div className={classes.huongdan}>
                    Chọn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    và đặt (miễn phí)
                  </div>
                  <hr />
                  <div className={classes.texta1}>{doctor.tieude}</div>
                  <div className={classes.texta}>{doctor.ten}</div>
                  <div className={classes.text_address}>{doctor.diachi}</div>
                  <div className={classes.text_address}>
                    Giá Khám: {doctor.gia}.
                    <a href="" className={classes.chititet}>
                      {" "}
                      Xem chi tiết
                    </a>
                  </div>
                  <div className={classes.text_address}>
                    Loại Bảo Hiểm áp dụng.
                    <a href="" className={classes.chititet}>
                      Xem chi tiết
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Item>
          </Grid>

  



          <Grid item xs={6}>
            <Item>
              <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid item xs={4}>
                  <div>
                    <div className={classes.div_center}>
                      <img
                        src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                        alt="..."
                        className={classes.imageradios}
                      />
                    </div>
                    <div className={classes.texta}>{doctor.name}</div>
                    <div className={classes.text}>{doctor.pass}</div>
                    <br />
                    <span>
                      <a href="">xem thêm</a>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={classes.selectTime}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={calendar}
                        onChange={handleChange}
                      >
                        <MenuItem value={2}>Thứ 2 - 25/10</MenuItem>
                        <MenuItem value={3}>Thứ 3 - 26/10</MenuItem>
                        <MenuItem value={4}>Thứ 4 - 27/10</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <h3 className={classes.lichkham}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={classes.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      LỊCH KHÁM
                    </h3>
                  </div>
                  <div className={classes.datlichkham}>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                    <Button className={classes.chongio}>15:00 - 15:30</Button>
                  </div>
                  <div className={classes.huongdan}>
                    Chọn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    và đặt (miễn phí)
                  </div>
                  <hr />
                  <div className={classes.texta1}>{doctor.tieude}</div>
                  <div className={classes.texta}>{doctor.ten}</div>
                  <div className={classes.text_address}>{doctor.diachi}</div>
                  <div className={classes.text_address}>
                    Giá Khám: {doctor.gia}.
                    <a href="" className={classes.chititet}>
                      {" "}
                      Xem chi tiết
                    </a>
                  </div>
                  <div className={classes.text_address}>
                    Loại Bảo Hiểm áp dụng.
                    <a href="" className={classes.chititet}>
                      Xem chi tiết
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          
        </Grid>
      </Box>
    </React.Fragment>
  );
}
