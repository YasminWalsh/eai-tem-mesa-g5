import { HomeProvider } from "./Home";
import { RestaurantProvider } from "./Restaurant";
import { RestaurantDashProvider } from "./RestaurantDash";
import { UserProvider } from "./User";
import { UserLoggedProvider } from "./UserLogged";

const Providers = ({ children }) => {
  return (
    <>
      <HomeProvider>
        <UserProvider>
          <UserLoggedProvider>
            <RestaurantDashProvider>
              <RestaurantProvider>
                <UserProvider>{children}</UserProvider>
              </RestaurantProvider>
            </RestaurantDashProvider>
          </UserLoggedProvider>
        </UserProvider>
      </HomeProvider>
    </>
  );
};

export default Providers;
