import React from "react";
import UserDashBoardLayout from "../../../Components/Layouts/UserDashBoardLayouts/UserDashBoardLayout";
import ContentLayOut from "../../../Components/Layouts/UserDashBoardLayouts/ContentLayOut";
import FormFieldComponent from "../../../Components/super-admin-components/form-filed/FormFieldComponent";

export default function FormFiledPage() {
  return (
    <>
      <UserDashBoardLayout>
        <ContentLayOut topStats="top stats">
          <FormFieldComponent />
        </ContentLayOut>
      </UserDashBoardLayout>
    </>
  );
}
