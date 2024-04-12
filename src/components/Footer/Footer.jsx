
import { FooterContainer,AnchorStyle,Image } from "./styled";
import instaImage from "../../assets/instagram.png";
import facebookImage from "../../assets/facebook.png";
import twitterImage from "../../assets/twitter.png";

export const FooterLayout = () => {

    return (
        <FooterContainer>
            <AnchorStyle
                  href="https://www.instagram.com/thecatsie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={instaImage} />
                </AnchorStyle>

                <AnchorStyle
                  href="https://www.facebook.com/thecatsie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={facebookImage} />
                </AnchorStyle>

                <AnchorStyle
                  href="https://www.twitter.com/thecatsie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={twitterImage} />
                </AnchorStyle>
        </FooterContainer>
    );
}