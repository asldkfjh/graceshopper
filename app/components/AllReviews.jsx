import React from 'react'
import { connect } from 'react-redux'

// should this become a dummy component?
export class AllReviews extends React.Component {
  render () {
    return (
      <div>
          {
            this.props.allReviews && this.props.allReviews.map(review => {
              return (
                <div key={review.id}>
                  <Link to={`/reviews/${review.id}`}>
                    <p>{review.name}</p>
                    <p>{review.rating}</p>
                    <p>{review.content.slice(0, 140)}</p>
                  </Link>
                </div>
              )
            })
          }
      </div>
    )
  }
}

const mapStateToProps = state => ({allReviews: state.allReviews})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews)
