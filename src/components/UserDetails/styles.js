import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center'
  },

  cardHeader: {
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  cardName: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 2,
  },
  cardUsername: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
  contactContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactInfo: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  contactIcon: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    paddingBottom: 3,
  },
  contactText: {
    marginTop: 5,
    fontSize: 12,
  },
  mapContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 10,
},
map: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    width: 240,
    height: 200,
  },
  btn: {
    marginTop: 5,
    width: 240,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  btnText:{
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500'
  },
});

export default styles;
