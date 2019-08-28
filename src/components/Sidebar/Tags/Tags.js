/* eslint no-use-before-define: 0 */  // --> OFF
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styles from './Tags.module.scss';


const Tags = ({ categories }) => {
    return (
            <div>
                <p className={styles['category-para']}>Categories:</p>
                    {categories.map((category) => (
                      <span key={category.fieldValue}>
                        <Link className={styles['category-item']} to={`/category/${kebabCase(category.fieldValue)}/`}>
                          {category.fieldValue} ({category.totalCount})
                        </Link>
                      </span>
                    ))}
            </div>
)};

export default Tags;
