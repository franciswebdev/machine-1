import { Provider } from "react-redux"
import Counter from "@/components/redux/Counter";
import store from "@/components/redux/store";

function HomePage() {
  console.log('home page')
    return (
      <Provider store={store}>
        <div>Welcome to Next.js!</div>
        <Counter/>
      </Provider>);
  }
  
  export default HomePage