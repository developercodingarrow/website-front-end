import "../styles/globals.css";
import CarouselContextApiProvider from "../Context Api/CarouselContextApi";
import AppContextApiProvider from "../Context Api/AppContextApi";
import UserDashBoardContextApi from "../Context Api/UserDashBoardContextApi";
import TestContextAppiProvide from "../Context Api/TestContextAppi";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CarouselContextApiProvider>
        <AppContextApiProvider>
          <UserDashBoardContextApi>
            <TestContextAppiProvide>
              <Component {...pageProps} />
            </TestContextAppiProvide>
          </UserDashBoardContextApi>
        </AppContextApiProvider>
      </CarouselContextApiProvider>
    </>
  );
}
