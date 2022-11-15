export const getAllSubscriptions = () => {
    return fetch("http://localhost:8000/subscriptions")
        .then(res => res.json())
    }
export const addSubscription = subscription => {
    return fetch("http://localhost:8000/subscriptions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription)
    })
    }
export const deleteSubscription = (subscriptionId) => {
    return fetch(`http://localhost:8000/subscriptions/${subscriptionId}`, {
        method: "DELETE"
    })
    }