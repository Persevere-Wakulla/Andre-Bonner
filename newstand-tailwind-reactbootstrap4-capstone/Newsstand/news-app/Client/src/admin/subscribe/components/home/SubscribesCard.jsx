import SubscribeSingleCard from "./SubscribeSingleCard"

const SubscribesCard = ({ subscribes }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {subscribes.map((item) => (
                <SubscribeSingleCard key={item._id} subscription={item} />
            ))}
        </div>
    )
}
export default SubscribesCard