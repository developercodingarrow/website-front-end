import "../styles/globals.css";
import CarouselContextApiProvider from "../Context Api/CarouselContextApi";
import AppContextApiProvider from "../Context Api/AppContextApi";
import UserDashBoardContextApi from "../Context Api/UserDashBoardContextApi";
import TestContextAppiProvide from "../Context Api/TestContextAppi";
import AuthContextApiProvider from "../Context Api/AuthContextApi";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CarouselContextApiProvider>
        <AppContextApiProvider>
          <UserDashBoardContextApi>
            <TestContextAppiProvide>
              <AuthContextApiProvider>
                <Component {...pageProps} />
              </AuthContextApiProvider>
            </TestContextAppiProvide>
          </UserDashBoardContextApi>
        </AppContextApiProvider>
      </CarouselContextApiProvider>
    </>
  );
}
