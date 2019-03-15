import React from 'react'
import PropTypes from 'prop-types'

import PostListItem from '../post_list_item'

import style from './post_list.module.css'

const PostList = ({ posts }) => (
  <div className={style.container}>
    {posts.map(({ node }, index) => {
      const { title, date, description } = node.frontmatter
      const { path } = node.fields
      // eslint-disable-next-line template-curly-spacing
      return <PostListItem
        key={`${index}${title}`}
        path={path} title={title}
        date={date}
        description={description} />
    })}
  </div>
)
PostList.propTypes = {
  posts: PropTypes.array
}
export default PostList
