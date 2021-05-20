import axios from "axios";
import React, { useEffect } from "react";
import useStyles from "./styles";
const ProfileView = () => {
  const classes = useStyles();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [skills, setSkills] = useState([]);

  //   const [fields, setFields] = useState({});

  //   const getUser = () => {
  //     return axios
  //       .get(`${process.env.REACT_APP_SERVER_URL}/users/${user.sub}`)
  //       .then((res) => res.data.json());
  //   };

  //   useEffect(() => {
  //     let mounted = true;
  //     getUser().then((fieldItems) => {
  //       if (mounted) {
  //         setFields(fieldItems);
  //       }
  //     });
  //     return () => (mounted = false);
  //   }, []);

  useEffect(() => {
    const getUser = () => {
      try {
        const { data } = await axios({
          url: `${process.env.REACT_APP_SERVER_URL}/users/${user.sub}`,
        });
        setFirstname(data.given_name);
        setLastname(data.family_name);
        setImage(data.picture);
        if (data.user_metadata) {
          if (data.user_metadata.title) {
            setTitle(data.user_metadata.title);
          }
          if (data.user_metadata.contact_number) {
            setPhoneNumber(data.user_metadata.contact_number);
          }
          if (data.user_metadata.skills) {
            setSkills(data.user_metadata.skills);
          }
          if (data.user_metadata.bio) {
            setBio(data.user_metadata.bio);
          }
        }
      } catch (err) {
        console.log(err.response);
      }
    };

    getUser();
  }, []);

  return (
    <div className={classes.profileView}>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{title}</p>
      <p>{phoneNumber}</p>
      <p>{bio}</p>
      <img src={image} alt="picture" />
      <div className={classes.skills}>{skills.map((skill, id)=><p key={id}>{skill}</p>)}</div>
    </div>
  );
};

export default ProfileView;
