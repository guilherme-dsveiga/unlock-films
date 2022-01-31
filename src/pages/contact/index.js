import React, { useState } from "react";
import useScrollListener from "../../hooks/useScrollListener";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import EmailIcon from "@material-ui/icons/Email";
import ContactForm from "../../components/contact-form";

const useStyles = makeStyles((theme) => ({
  homeBanner: {
    width: " 100%",
    height: "50%",
    objectFit: "cover",
  },
  homeBannerImg: {
    width: " 100%",
    height: "100%",
    objectFit: "cover",
  },
  contactWrapper: {},
}));

const Contact = () => {
  const classes = useStyles();

  const [blackHeader, setBlackHeader] = useState(false);

  useScrollListener(setBlackHeader);

  return (
    <>
      <div className={classes.headerBgWrapper}>
        <Header black={blackHeader} startBlack={false} />
        <Banner
          bannerImg="./assets/bg-contact.jpg"
          icon={<EmailIcon fontSize="inherit" />}
          label="entre em contato"
          darkbg={true}
        />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
