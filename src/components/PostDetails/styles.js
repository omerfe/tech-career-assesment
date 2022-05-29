import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    body: {
        
    },
    iconContainer: {
        flexDirection :'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    commentsContainer: {
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',       
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 6,
    },
    commentTitle: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    commentInput: {
        flex: 7,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 5,
    },
    replyButton: {
        flex: 1,
        paddingVertical: 6,
        paddingHorizontal: 5,
        marginLeft: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    likes: {
        color: 'grey', 
        textAlign: 'right', 
        fontSize: 12, 
        marginTop: 10
    },
    minsAgo: {
        color: 'grey',
        fontSize: 12,
    },
})

export default styles;