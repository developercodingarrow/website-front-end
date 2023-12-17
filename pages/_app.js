import "../styles/globals.css";
import CarouselContextApiProvider from "../Context Api/CarouselContextApi";
import AppContextApiProvider from "../Context Api/AppContextApi";
import UserDashBoardContextApi from "../Context Api/UserDashBoardContextApi";
import TestContextAppiProvide from "../Context Api/TestContextAppi";
import AuthContextApiProvider from "../Context Api/AuthContextApi";
import FillterContextAppiProvide from "../Context Api/FillterContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CarouselContextApiProvider>
        <AppContextApiProvider>
          <UserDashBoardContextApi>
            <TestContextAppiProvide>
              <AuthContextApiProvider>
                <FillterContextAppiProvide>
                  <Component {...pageProps} />
                </FillterContextAppiProvide>
              </AuthContextApiProvider>
            </TestContextAppiProvide>
          </UserDashBoardContextApi>
        </AppContextApiProvider>
      </CarouselContextApiProvider>
    </>
  );
}
