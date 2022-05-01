import { Provider } from "react-redux"
import Counter from "@/components/redux/app-1/Counter";
import store from "@/components/redux/app-1/store";
import { Container } from "@mui/material";

function HomePage() {
  return (
    <Provider store={store}>
      <Container>
        <div>Welcome to Next.js!</div>
        <Counter/>
      </Container>
    </Provider>);
  }
  
  export default HomePage