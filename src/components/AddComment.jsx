import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGVkZTk0OTJlNDAwMTVlN2M3MTMiLCJpYXQiOjE3NDQwNDAxMzIsImV4cCI6MTc0NTI0OTczMn0.VHSnef-aTB717ceHPunLHP2eAeRZm7z8rERnuVBSHRM";
function AddComment({ asin }) {
  const [formData, setFormData] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  useEffect(() => {
    setFormData((prevFormaData) => ({
      ...prevFormaData,
      elementId: asin,
    }));
  }, [asin]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
          Authorization: API_KEY,
        },
      });
      if (response.ok) {
        alert("Recensione inviata!");
        setFormData({
          comment: "",
          rate: 1,
          elementId: asin,
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
}

export default AddComment;
