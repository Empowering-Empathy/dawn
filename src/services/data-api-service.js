const DataApiService={
    postOneData(radio1, radio2, user_name, user_age, user_position, radio3){
        return fetch(`http://localhost:8080/v1/graphql`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(
                radio1,
                radio2,
                user_name,
                user_age,
                user_position,
                radio3
            ),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    
    getUserInfo(){
            return fetch(`http://localhost:8080/v1/graphql`, {
            })
                .then(res =>
                    (!res.ok)
                        ? res.json().then(e => Promise.reject(e))
                        : res.json()
                )
        }
    
}

export default DataApiService