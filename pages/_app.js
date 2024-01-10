import "../styles/globals.css";
import CarouselContextApiProvider from "../Context Api/CarouselContextApi";
import AppContextApiProvider from "../Context Api/AppContextApi";
import UserDashBoardContextApi from "../Context Api/UserDashBoardContextApi";
import TestContextAppiProvide from "../Context Api/TestContextAppi";
import AuthContextApiProvider from "../Context Api/AuthContextApi";
import FillterContextAppiProvide from "../Context Api/FillterContext";
import CustimeContextProvider from "../Context Api/CustimeContextApi";
import ProjectContextApiProvide from "../Context Api/ProjectContextApi";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CarouselContextApiProvider>
        <AppContextApiProvider>
          <UserDashBoardContextApi>
            <TestContextAppiProvide>
              <AuthContextApiProvider>
                <FillterContextAppiProvide>
                  <CustimeContextProvider>
                    <ProjectContextApiProvide>
                      <Component {...pageProps} />
                    </ProjectContextApiProvide>
                  </CustimeContextProvider>
                </FillterContextAppiProvide>
              </AuthContextApiProvider>
            </TestContextAppiProvide>
          </UserDashBoardContextApi>
        </AppContextApiProvider>
      </CarouselContextApiProvider>
    </>
  );
}
