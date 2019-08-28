// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import Tags from './Tags';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import { useCategoriesList } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const SortCategory = (categories) => {
  return categories.sort((a,b) => b.totalCount - a.totalCount)
}

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const categories = SortCategory(useCategoriesList());

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <div className={styles['sidebar__categories']}>
        <Tags categories={categories} />
        </div>
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
