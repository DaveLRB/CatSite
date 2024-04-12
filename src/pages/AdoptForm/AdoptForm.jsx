import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavbarLayout } from "../../components/Navbar/Navbar";
import { useSelector } from 'react-redux';
import { getCatById } from '../../store/cats/selectors';
import bundleCats from '../../assets/bundlecats.png';
import {
  FormStyle,
  FormContainer,
  MessageLarge,
  MessageMedium,
  MessageSmall,
  Modal,
  ModalContent,
  CloseButton,
  MainContainer,
  LeftContainer,
  RightContainer,
  Buttons,
  SpanButtons,
  ButtonContainer,
  Title,
  SubTitle,
  Image,
} from "./styled";
import "./styledForm.css";

export const AdoptFormPage = () => {
  const { id } = useParams();
  const cat = useSelector(state => getCatById(state, id)) || {};
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [familyMembers, setFamilyMembers] = useState("");
  const [homeType, setHomeType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [adoptReason, setAdoptReason] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setShowModal(true);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setOccupation("");
    setFamilyMembers("");
    setHomeType("");
    setAdditionalInfo("");
    setAdoptReason("");

   /*  setTimeout(() => {
      navigate("/home");
    }, 5000); */
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setOccupation("");
    setFamilyMembers("");
    setHomeType("");
    setAdditionalInfo("");
    setAdoptReason("");
  };

  const handleBackClick = (e) => {
    e.preventDefault;
    navigate(`/cat/${cat.id}`);
  };

  const onClose = () => {
    setShowModal(false);
  }
  useEffect(() => {
    if (showModal) {
      setShowModal(true);
     /*  setTimeout(() => {
        setShowModal(false);
      }, 10000); */
    }
  }, [showModal]);

  return (
    <div>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <Title>Are you adopting the beautiful {cat.name}?</Title>
        <FormContainer>
          <FormStyle onSubmit={handleSubmit} onReset={handleReset}>
            <SubTitle>Adoption Form</SubTitle>
            <MainContainer>
              <LeftContainer>
                <label htmlFor="inpDis" className="inpDis">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    defaultValue={cat.name}
                    disabled
                  />
                  <span className="labelDis">Cat Name</span>
                  <span className="focus-bgDis"></span>
                </label>

                <label htmlFor="inpDis" className="inpDis">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    defaultValue={cat.age}
                    disabled
                  />
                  <span className="labelDis">Age</span>
                  <span className="focus-bgDis"></span>
                </label>

                <label htmlFor="inpDis" className="inpDis">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    defaultValue={cat.race}
                    disabled
                  />
                  <span className="labelDis">Breed</span>
                  <span className="focus-bgDis"></span>
                </label>

                <label htmlFor="inp" className="inp">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <span className="label">Name</span>
                  <span className="focus-bg"></span>
                </label>

                <label htmlFor="inp" className="inp">
                  <input
                    type="email"
                    id="inp"
                    placeholder="&nbsp;"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="label">Email</span>
                  <span className="focus-bg"></span>
                </label>

                <label htmlFor="inp" className="inp">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <span className="label">Phone Number</span>
                  <span className="focus-bg"></span>
                </label>
              </LeftContainer>
              <RightContainer>
                <label htmlFor="inp" className="inp">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <span className="label">Address</span>
                  <span className="focus-bg"></span>
                </label>

                <label htmlFor="inp" className="inp">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                  />
                  <span className="label">Occupation</span>
                  <span className="focus-bg"></span>
                </label>

                <p className="adoptChoice">Reason for adoption</p>

                <label className="radio">
                  <input
                    type="radio"
                    name="adoptReason"
                    value="Companion"
                    checked={adoptReason === "Companion"}
                    onChange={(e) => setAdoptReason(e.target.value)}
                  />
                  Companion
                </label>

                <label className="radio">
                  <input
                    type="radio"
                    name="adoptReason"
                    value="Family pet"
                    checked={adoptReason === "Family pet"}
                    onChange={(e) => setAdoptReason(e.target.value)}
                  />
                  Family pet
                </label>

                <label htmlFor="inp" className="inp">
                  <input
                    type="number"
                    id="inp"
                    placeholder="&nbsp;"
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(e.target.value)}
                    required
                  />
                  <span className="label">Number of Family Members</span>
                  <span className="focus-bg"></span>
                </label>

                <label htmlFor="inp" className="inp">
                  <select
                    className="minimal"
                    value={homeType}
                    onChange={(e) => setHomeType(e.target.value)}
                    required
                  >
                    <option value="">Type of Home</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </label>

                <label htmlFor="inp" className="inp">
                  <input
                    type="text"
                    id="inp"
                    placeholder="&nbsp;"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  />
                  <span className="label">More Info</span>
                  <span className="focus-bg"></span>
                </label>
              </RightContainer>
            </MainContainer>
            <ButtonContainer>
              <Buttons  onClick={handleBackClick}>
                <SpanButtons className="spanBtn"> Go &#x2190;</SpanButtons>
              </Buttons>
              <Buttons  type="reset">
                <SpanButtons className="spanBtn">&#x21BA;</SpanButtons>
              </Buttons>
              <Buttons type="submit">
                <SpanButtons className="spanBtn">&#8594;</SpanButtons>
              </Buttons>
            </ButtonContainer>
          </FormStyle>
          {showModal && (
            <Modal>
              <ModalContent>
              <CloseButton onClick={onClose}>X</CloseButton>
                <MessageLarge>Thank you for your submission!</MessageLarge>
                <MessageLarge>We will get back to you soon!</MessageLarge>
                <MessageLarge>You are a wonderful human being!</MessageLarge>
                <Image src={bundleCats}/>
                <MessageMedium>See ya!</MessageMedium>
                <MessageSmall>You will be redirected in a few seconds!</MessageSmall>
              </ModalContent>
            </Modal>
          )}
        </FormContainer>
      </main>
    </div>
  );
};
