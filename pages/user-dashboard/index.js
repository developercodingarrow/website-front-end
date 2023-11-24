import React, { useContext } from "react";
import UserDashBoardLayout from "../../Components/Layouts/UserDashBoardLayouts/UserDashBoardLayout";
import TestTable from "../../Utils/tabls Componant/TestTable";
import DashBoardComponent from "../../Components/user Dashboard/DashBoard/DashBoardComponent";

export default function UserDashBoardPage() {
  return (
    <div>
      <UserDashBoardLayout>
        <DashBoardComponent />
      </UserDashBoardLayout>
    </div>
  );
}
