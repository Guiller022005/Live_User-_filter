export const getAllNameUser = async () => {
    console.log("Esperando .........");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/user`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        let res = await fetch(url, options);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

export const getAllProductsName = async ({ search: text } = { search: "Zhadana" }) => {
    const url = `https://6674179975872d0e0a950e53.mockapi.io/user/20`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        let res = await fetch(url, options);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};
