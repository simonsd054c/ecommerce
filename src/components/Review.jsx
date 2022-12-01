import { useReducer} from "react"
import reviewReducer from "./reducers/reviewReducer"
import Title from "./styled/Title"

const initialReviews = [
    {
        id: 1,
        description: "bad to use, do not recommend",
    },
    {
        id: 2,
        description: "good to use, definitely recommend",
    },
]

function Review() {
    // const [reviews, setReviews] = useState(initialReviews)
    // const [review, setReview] = useState("")
    // const [showEditBox, setShowEditBox] = useState(false)
    // const [editReviewId, setEditReviewId] = useState(null)
    // const [editReviewDesc, setEditReviewDesc] = useState("")

    const initialState = {
        reviews: initialReviews,
        review: "",
        showEditBox: false,
        editReviewId: null,
        editReviewDesc: "",
    }

    const [store, dispatch] = useReducer(reviewReducer, initialState)

    const { reviews, review, showEditBox, editReviewDesc } = store

    const handleOnChange = (e) => {
        dispatch({
            type: 'setReview',
            data: e.target.value
        })
        // setReview(e.target.value)
    }

    const addReview = (e) => {
        e.preventDefault()
        dispatch({
            type: 'addReview'
        })
        //add 'review' with correct object structure inside the 'reviews'
        // setReviews((prevReviews) => {
        //     return [
        //         ...prevReviews,
        //         { id: prevReviews.length + 1, description: review },
        //     ]
        // })
        // setReview("")
    }

    const deleteReview = (id) => {
        dispatch({
            type: 'deleteReview',
            data: id
        })
        //delete the review with id 'id' from 'reviews'
        // const newReviews = reviews.filter((review) => review.id !== id)
        // setReviews(newReviews)
    }

    const editReview = (id) => {
        dispatch({
            type: 'editReview',
            data: id
        })
        // setShowEditBox(true)
        // setEditReviewId(id)
        // setEditReviewDesc(
        //     reviews.find((review) => review.id === id).description
        // )
    }

    const handleEditReview = (e) => {
        dispatch({
            type: 'setEditReview',
            data: e.target.value
        })
        // setEditReviewDesc(e.target.value)
    }

    const handleEdit = () => {
        dispatch({
            type: 'handleEdit',
        })
        // const newReviews = [...reviews]
        // const newReviews = reviews
        //find the review with id 'editReviewId'
        // const reviewIndexToEdit = reviews.findIndex(
        //     (review) => review.id === editReviewId
        // )
        //update the description of that review
        // newReviews[reviewIndexToEdit].description = editReviewDesc
        //update the reviews state
        // setReviews(newReviews)
        // setEditReviewDesc("")
        // setShowEditBox(false)
    }

    return (
        <div style={{ padding: 20 }}>
            <Title>Review</Title>
            {reviews.map((review) => {
                return (
                    <div key={review.id} style={{ padding: "20px 0px" }}>
                        <div>{review.description}</div>
                        <button onClick={() => editReview(review.id)}>
                            Edit
                        </button>
                        <button onClick={() => deleteReview(review.id)}>
                            Delete
                        </button>
                    </div>
                )
            })}
            {showEditBox && (
                <div>
                    <textarea
                        value={editReviewDesc}
                        onChange={handleEditReview}
                    />
                    <div>
                        <button onClick={handleEdit}>Save Edit</button>
                    </div>
                </div>
            )}
            <form>
                <div>Add Review</div>
                <textarea value={review} onChange={handleOnChange} />
                <div>
                    <button onClick={addReview}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Review
