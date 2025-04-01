export const theme: any = {
    colors: {
        primary: '#6200ea',
        secondary: '#03dac6',
        background: '#121212',
        text: '#ffffff',
        card: '#1e1e1e',
        border: '#333333',
    },
    section: {
        flex: 1, // Makes both sections equal height
        width: "100%",
    },
    blurOverlay: {
        position: "absolute",
        width: "100%",
        height: 50, // Adjust the blur thickness
        top: "50%", // Positions the blur at the middle
        transform: [{ translateY: -25 }], // Centers the blur perfectly
        zIndex: 10, // Ensures blur appears on top
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
    typography: {
        heading: 24,
        subheading: 18,
        body: 14,
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    followButton:{
        marginTop: 10,
        width: '50%',
    },
    list: {
        paddingHorizontal: 10,
        flexGrow: 1,
    },
    infoContainer: {
        flex: 1,
        marginTop: 12,
    },
    ListItemHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 15
    },
};


export const ProfileHeader: any = {
    usernameHandle: { color: '#ccc', fontSize: 16, flexDirection: 'row', alignItems: 'center' },
    username: { color: '#fff', fontSize: 28, fontWeight: 'bold', textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3 },
    location: { color: '#aaa', fontSize: 18 },
    badge: { width: 16, height: 16, marginLeft: 5 },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 12,
    },
};

export const RestaurantBody: any = {
    restaurantTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginLeft: 15,
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },

    card: {
        width: 100,
        margin: 8,
        alignItems: "center",
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 15,
    },
    name: {
        color: "white",
        fontSize: 12,
        marginTop: 5,
        textAlign: "center",
    },
    ratingPosition: {
        position: "absolute",
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: [{ translateX: -20 }, { translateY: -30 }], // Adjust to truly center
    }
};


export const recentActivity: any = {
    recentActivityHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    details: {
        fontSize: 14,
        color: 'gray',
    },
    ratingContainer: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
};

export const listItems: any = {
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#333"
    },
    textContainer: {
        flex: 1
    },
    iconArea: {
        marginRight: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white" },
    description: {
        fontSize: 14,
        color: "#bbb",
        marginTop: 3
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    footerText: { color: "#888", fontSize: 12 },
    nearby: { color: "#0f0", fontWeight: "bold", fontSize: 12 },
    button: { backgroundColor: "#1f1f1f", padding: 15, borderRadius: 25, alignItems: "center", marginTop: 15, borderWidth: 1, borderColor: "#444" },
    buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
    count: { fontSize: 16, color: "white", marginRight: 10 },
};

export const menuListItems: any = {
    menuListItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    menuIcon: { marginRight: 15 },
    menuTitle: { flex: 1, fontSize: 16, color: "white", fontWeight: "bold" },
    menuCount: { fontSize: 16, color: "white", marginRight: 10 },
    menuArrow: { width: 20, height: 20 },
    menuIconArea: { marginRight: 12, },
};

export const peopleListScreen: any = {
    container: { flex: 1, backgroundColor: '#121212', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 12, marginTop: 10 },
}

export const peopleListScreenCard: any = {
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    info: {
        marginLeft: 12,
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 5,
    },
    location: {
        fontSize: 14,
        color: '#aaa',
    },
    icon: {
        width: 16,
        height: 16,
        marginLeft: 5,
    },
    arrow: {
        width: 16,
        height: 16,
        tintColor: '#aaa',
    },
}
