import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import ProfileForm from "../elements/ProfileForm";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useUpdateUserDataMutation } from "../../app/store/services/userApi";

const ShipmentStep = ({ user, refetchUser, isFetchingUser, ...props }) => {
  //console.log("#### shipmentstep user", user);
  const [updateUserData, result] = useUpdateUserDataMutation();

  //TODO:ERRORES EN PANTALLA
  const onSubmit = async (newUserValues) => {
    console.log("updateUserData ---------------------", newUserValues);
    console.log("user++++++++++++++++++", user._id);
    //const { done } = await updateUser(user._id, newUserValues)
    //  done && refetchUser()
    try {
      console.log("first");
      await updateUserData({ userId: user._id, ...newUserValues });
    } catch (error) {
      console.log("ERROR updateUser EN ShipmentStep.JS", error);
    }
  };

  //Obtiene dirección principal del array de direcciones
  /*
    if (user?.hasProfile) {
        const [mainAddress] = user.addresses
        const { address, moreInfo, city, postCode, region, country } = mainAddress
        const addressLine = `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`
    }
*/
  const getAddressLine = () => {
    const [mainAddress] = user.addresses;

    const { address, moreInfo, city, postCode, region, country } = mainAddress;
    return `${address}, ${moreInfo}, ${city}, ${postCode}, ${region}, ${country}`;
  };
  const addressLine = user?.hasProfile ? getAddressLine() : "";
  return isFetchingUser ? (
    <Stack
      sx={{ color: "grey.500", justifyContent: "center" }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="primary" />
    </Stack>
  ) : user?.hasProfile ? (
    <Box>
      <Stack mb={2} direction="row">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Mis datos
        </Typography>
      </Stack>
      <Stack mb={1} direction="row">
        <Typography sx={{ fontWeight: "bold", mr: 1 }}>Nombre:</Typography>
        <Typography>{user.name}</Typography>
      </Stack>
      <Stack mb={1} direction="row">
        <Typography sx={{ fontWeight: "bold", mr: 1 }}>Direccion:</Typography>
        <Typography>{addressLine}</Typography>
      </Stack>
      <Stack mb={1} direction="row">
        <Typography sx={{ fontWeight: "bold", mr: 1 }}>Móvil: </Typography>
        <Typography>{user.phone}</Typography>
      </Stack>
    </Box>
  ) : (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography p={2} variant="h5" sx={{ fontWeight: "bold" }}>
          Dirección de envío
        </Typography>
      </Box>
      <ProfileForm {...props} onSubmit={onSubmit} />
    </>
  );
};

export default ShipmentStep;
