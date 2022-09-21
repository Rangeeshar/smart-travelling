import React, { useState } from "react";
import Image from "next/image";
import tripOne_logo_1 from "../public/images/trip/tripOne_logo_1.png";
import tripOne_logo_2 from "../public/images/trip/tripOne_logo_2.png";
import tripOne_logo_3 from "../public/images/trip/tripOne_logo_3.png";
import destination_1 from "../public/images/trip/destination_1.png";
import destination_2 from "../public/images/trip/destination_2.png";
import destination_3 from "../public/images/trip/destination_3.png";
import destination_4 from "../public/images/trip/destination_4.png";
import destination_5 from "../public/images/trip/destination_5.png";
import cross from "../public/images/trip/cross.png";
import styles from "../styles/TripOne.module.css";
import swal from 'sweetalert';


function TripOne() {
  const [userInfo, setUserInfo] = useState([]);
  const [input1, setInput1] = useState(false);
  const [info, setInfo] = useState("");
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setUserInfo([...userInfo, value])
    }
  }
  const handleClick = () => {
    if (userInfo.length === 1) {
      swal({
        text: "Select minumum 2 destination",
        icon: "warning",
        button: "Ok",
      });
    }
    else {
      toggleInput1()
      for (let i = 0; i < userInfo.length; i++) {
        info = info.concat(userInfo[i])
        if (i < userInfo.length - 1) {
          info = info.concat(', ')
        }
      }
      setInfo(info)
    }
  }
  function toggleInput1() {
    setInput1(!input1);
  }

  return (
    <div>
      <div>
        <Image
          src="/../public/images/trip/trip_background.png"
          height={676}
          width={1366}
        />
        <div className={styles.tripOne_logo_container}>
          <div className={styles.tripOne_line}>
            <div className={styles.tripOne_logo}>
              <Image
                src={tripOne_logo_1}
                alt="trip_section_logo"
                height={22}
                width={20}
                className={styles.logo}
              />
            </div>
          </div>
          <div className={styles.tripOne_line}>
            <div className={styles.tripOne_logo_1}>
              <Image
                src={tripOne_logo_2}
                alt="trip_section_logo"
                height={22}
                width={20}
                className={styles.logo}
              />
            </div>
          </div>

          <div className={styles.tripOne_logo_1}>
            <Image
              src={tripOne_logo_3}
              alt="trip_section_logo"
              height={22}
              width={20}
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.input_container}>
          <input
            className={styles.input_field}
            onClick={toggleInput1}
            value={info.length === 0 ? "Choose Destination" : info}
          />

          {/*hide show div for first input  */}
          <div
            style={{
              display: input1 ? "block" : "none",
            }}
          >
            <div className="container" id={styles.tripOne_inputone_container}>
              <p className={styles.tripOne_content}>Choose 2 or more</p>
              <p className={styles.tripOne_cross_para} onClick={toggleInput1}>
                <Image
                  src={cross}
                  alt="cross_image"
                  height={12}
                  width={15}
                  className={styles.cross_image}
                />
              </p>
              <div className="row">
                <div
                  className="col-md-4 p-0"
                  id={styles.tripOne_inputone_content_container1}
                >
                  <Image src={destination_1} alt="destination-image" />
                  <input
                    type="checkbox"
                    name="place"
                    value="MANALI"
                    onChange={handleChange}
                    className={styles.tripOne_circle1}
                  />
                </div>
                <p className={styles.tripOne_inputone_content_1}>MANALI</p>
                <div
                  className="col-md-4 p-0"
                  id={styles.tripOne_inputone_content_container2}
                >
                  <Image src={destination_2} alt="destination-image" />
                  <input
                    type="checkbox"
                    name="place"
                    value="KASOL"
                    onChange={handleChange}
                    className={styles.tripOne_circle2}
                  />
                </div>
                <p className={styles.tripOne_inputone_content_2}>KASOL</p>
                <div
                  className="col-md-4 p-0"
                  id={styles.tripOne_inputone_content_container3}
                >
                  <Image src={destination_3} alt="destination-image" />
                  <input
                    type="checkbox"
                    name="place"
                    value="LEHLADAKH"
                    onChange={handleChange}
                    className={styles.tripOne_circle3}
                  />
                </div>
                <p className={styles.tripOne_inputone_content_3}>Leh-Ladakh</p>
                <div
                  className="col-md-12"
                  id={styles.tripOne_inputone_image_container}
                >
                  <p className={styles.tripOne_inputone_content_6}>
                    Coming Soon
                  </p>
                  <div className="row px-3">
                    <div className="col-md-6 p-0">
                      <Image
                        src={destination_4}
                        alt="destination-image"
                        height={117}
                      />
                    </div>
                    <p className={styles.tripOne_inputone_content_4}>Goa</p>
                    <div className="col-md-6 p-0">
                      <Image
                        src={destination_5}
                        alt="destination-image"
                        height={230}
                      />
                    </div>
                    <p className={styles.tripOne_inputone_content_5}>
                      Rajsthan
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.tripOne_inputone_btn_container}>
                <button className={styles.tripOne_inputone_btn} onClick={handleClick}>Save</button>
              </div>
            </div>
          </div>
          <input defaultValue="No.of Guests" className={styles.input_field} />
          <input
            defaultValue="Select the Start & End Date"
            className={styles.input_field}
          />
          <div className={styles.btn_container}>
            <button className={styles.save_btn}>Save & Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TripOne;
