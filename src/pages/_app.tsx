import Master from "../Common/Master"
import CustomTheme from '../Common/CustomTheme';
import './style.css';
import { Provider } from "react-redux";
import store from "../store/store";
function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <Provider store={store}>
        <Master>
            <CustomTheme>
               
                <Component {...pageProps} />
               
            </CustomTheme>
        </Master>
        </Provider>)
}

export default MyApp