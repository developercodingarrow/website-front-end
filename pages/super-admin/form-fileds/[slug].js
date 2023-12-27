import React from "react";
import UserDashBoardLayout from "../../../Components/Layouts/UserDashBoardLayouts/UserDashBoardLayout";
import ContentLayOut from "../../../Components/Layouts/UserDashBoardLayouts/ContentLayOut";
import AddFormFieldComponent from "../../../Components/super-admin-components/form-filed/AddFormFieldComponent";

export default function AddFormFiledPage() {
  return (
    <UserDashBoardLayout>
      <ContentLayOut>
        <AddFormFieldComponent />
      </ContentLayOut>
    </UserDashBoardLayout>
  );
}
