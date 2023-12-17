import React from "react";
import UserDashBoardLayout from "../../Components/Layouts/UserDashBoardLayouts/UserDashBoardLayout";
import NewUsrsComponent from "../../Components/super-admin-components/new-users/NewUsrsComponent";
import ContentLayOut from "../../Components/Layouts/UserDashBoardLayouts/ContentLayOut";
import TopStats from "../../Utils/Layout-Components/TopStats";
export default function NewUsersPage() {
  return (
    <UserDashBoardLayout>
      <ContentLayOut topStats={<TopStats />}>
        <NewUsrsComponent />
      </ContentLayOut>
    </UserDashBoardLayout>
  );
}
