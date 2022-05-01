import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { PracticeItem } from "@/components/types/typing-app";

const TypingHome = () => {

  const [data, setData] = useState<PracticeItem>();

  useEffect(() => {
    fetch('api/sample-practice')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Container>
      {data?.paragraph}
    </Container>
  );
}

export default TypingHome;