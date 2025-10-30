import { Typography } from "@mui/material";

export const Cta = () => {
  const handleGoToMail = () => {
    window.location.href = `mailto:anirudhkuppili.dev@gmail.com?subject=Work%20with%20Ani&body=Hi%20Ani,%0AI'm%20interested%20in%20working%20with%20you`;
  };

  return (
    <Typography
      variant="h6"
      align="left"
      sx={{
        textDecoration: "underline",
        cursor: "pointer",
        marginLeft: "5%",
        textDecorationColor: "#fa8ab2",
        marginTop: "20px",
      }}
      onClick={handleGoToMail}
    >
      Work With Me →
    </Typography>
  );
};
