import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ApprovedAccredited from "@/components/ApprovedAccredited";

export const metadata: Metadata = {
  title: "Contact SPI Coatings - SPI Coatings",
  description:
    "SPI Coatings are Global Manufacturers of a range of commercial and industrial coatings. Please contact us anytime.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero image */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", maxHeight: "320px" }}>
        <Image
          src="/images/spi-coatings-hpc-offshore-pemex-banners.jpg"
          alt="Contact SPI Coatings"
          width={1600}
          height={320}
          style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
          priority
        />
      </div>

      {/* Breadcrumb */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
        <div className="container mx-auto px-4">
          <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
            <Link href="/" style={{ color: "#00578e", textDecoration: "none" }}>
              Home
            </Link>
            {" › "}
            <span style={{ color: "#888" }}>Contact SPI Coatings</span>
          </p>
        </div>
      </div>

      {/* Main */}
      <div style={{ padding: "40px 0 60px" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: company info */}
            <div className="lg:col-span-1">
              <h1 style={{ color: "#00578e", fontWeight: "800", fontSize: "1.8em", marginBottom: "20px" }}>
                Contact SPI Coatings
              </h1>
              <hr style={{ border: "none", borderTop: "2px solid #CC2026", marginBottom: "20px" }} />

              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "4px" }}>
                <strong>Superior Products International II, Inc.</strong>
              </p>
              <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                trading as SPI Coatings
              </p>

              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "16px" }}>
                10835 W 78th St,<br />
                Shawnee, Kansas 66214,<br />
                United States
              </p>

              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "16px" }}>
                Phone:{" "}
                <a
                  href="tel:+19139624848"
                  style={{ color: "#00578e", fontWeight: "700", textDecoration: "none" }}
                >
                  +1 913-962-4848
                </a>
              </p>

              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "6px" }}>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/company/superior-products-international-ii-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00578e", textDecoration: "none" }}
                >
                  SPI Coatings
                </a>
              </p>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9", marginBottom: "24px" }}>
                <strong>YouTube:</strong>{" "}
                <a
                  href="https://www.youtube.com/@SPICoatings"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00578e", textDecoration: "none" }}
                >
                  SPI Coatings
                </a>
              </p>

              <p style={{ color: "#444", fontSize: "14px", lineHeight: "1.9" }}>
                <strong>SPI Coatings are Global Manufacturers of a range of commercial and industrial coatings.</strong>{" "}
                Please contact us anytime.
              </p>
            </div>

            {/* Right: Contact form */}
            <div
              className="lg:col-span-2"
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                padding: "36px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <form action="#" method="POST">
                {/* Industry */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Industry
                  </label>
                  <select
                    name="industry"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      background: "#fff",
                      outline: "none",
                    }}
                  >
                    <option value="">Select</option>
                    <option>Industrial</option>
                    <option>Commercial</option>
                    <option>Energy &amp; Mining</option>
                    <option>Marine</option>
                    <option>Transportation</option>
                    <option>Agriculture</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* How did you find us */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    How did you find out about us?
                  </label>
                  <select
                    name="source"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      background: "#fff",
                      outline: "none",
                    }}
                  >
                    <option value="">Select</option>
                    <option>Google</option>
                    <option>Social Media</option>
                    <option>Forums</option>
                    <option>Referral</option>
                    <option>Existing project</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Country */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Country
                  </label>
                  <select
                    name="country"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      background: "#fff",
                      outline: "none",
                    }}
                  >
                    <option value="">Select Country</option>
                    <option>United States</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>American Samoa</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Anguilla</option>
                    <option>Antigua and Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Aruba</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bermuda</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bosnia and Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>British Virgin Islands</option>
                    <option>Brunei Darussalam</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Cape Verde</option>
                    <option>Cayman Islands</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo</option>
                    <option>Costa Rica</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Cyprus</option>
                    <option>Czech Republic</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>French Guiana</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Gibraltar</option>
                    <option>Greece</option>
                    <option>Greenland</option>
                    <option>Grenada</option>
                    <option>Guadeloupe</option>
                    <option>Guam</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guinea-Bissau</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Honduras</option>
                    <option>Hong Kong</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Korea</option>
                    <option>Kuwait</option>
                    <option>Kyrgyz Republic</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Macao</option>
                    <option>Macedonia</option>
                    <option>Madagascar</option>
                    <option>Malawi</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Martinique</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montenegro</option>
                    <option>Montserrat</option>
                    <option>Morocco</option>
                    <option>Mozambique</option>
                    <option>Myanmar</option>
                    <option>Namibia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherlands</option>
                    <option>New Caledonia</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Palestinian Territory</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Puerto Rico</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Russian Federation</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Swaziland</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syrian Arab Republic</option>
                    <option>Taiwan</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Trinidad and Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Uganda</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>

                {/* Name */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#333",
                      fontSize: "13px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#CC2026",
                    color: "#fff",
                    padding: "12px 40px",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "14px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
