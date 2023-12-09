<div className={styles.AuthFormUi_mainContainer}>
  <div className={styles.AuthFormUi_bannerSide}>
    <Image
      src={sideBanner}
      alt="side banner"
      width={900}
      height={900}
      className={styles.sideBannerImage}
    />
  </div>
  <div className={styles.AuthFormUi_formSide}>
    <div className={styles.AuthFormUi_formContainer}>
      <div className={styles.form_heading_Details}>
        <h4 className={styles.form_heading}>{formTitle}</h4>
        <p className={styles.formDescreption}>
          Create an account to start using Dashcode
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {inputsToRender.map((input, i) => {
            return (
              <div>
                <Controller
                  name={input.name}
                  control={control}
                  defaultValue=""
                  rules={input.validation}
                  render={({ field }) => (
                    <>
                      <Input
                        key={input.id}
                        {...input}
                        {...field}
                        inputDesign={"primaryInput"}
                        inputPadding={"primary_pading"}
                        inputContainer={"blockContainer"}
                      />
                      {errors[input.name] && (
                        <p className={"error_Msg"}>
                          {errors[input.name].message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            );
          })}

          {formType === "LOGIN" && (
            <div className={styles.forgote_Password}>
              <CustomeLink
                reDirectPath="/sign-up"
                text="forgate password"
                linkStyle="linkStyle"
                linkColor="linkColor"
                linkSze="linkSize"
              />
            </div>
          )}

          <div className={styles.btnBox}>
            <SubmitBtn
              text={btntext}
              buttonstyle="smallbtn"
              btnColor="primaryBtnColor"
              btnSze="smallbtn"
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
      {formType === "SINGUP" && (
        <div className={styles.singup_linkBox}>
          {/* Content to show when formType is SINGUP */}
          <span>Don't have an account ? </span>{" "}
          <span>
            {" "}
            <CustomeLink
              reDirectPath="/login"
              text="SignUp"
              linkStyle="linkStyle"
              linkColor="linkColor"
              linkSze="linkSize"
            />{" "}
          </span>
        </div>
      )}
    </div>
  </div>
</div>;
