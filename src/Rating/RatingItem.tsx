export type RatingItemProps = Nixix.InputHTMLAttributes<HTMLInputElement>

const RatingItem = ({ ...props }: RatingItemProps): someView => {
  return <input {...props} type="radio" />
}

export default RatingItem
