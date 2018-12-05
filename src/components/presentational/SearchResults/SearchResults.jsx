import React, { Fragment } from "react";
import { List, Avatar, Icon } from "antd";

const ListItem = List.Item;
const ListItemMeta = ListItem.Meta;

const IconText = ({ type, text }) => (
  <Fragment>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </Fragment>
);

export const SearchResults = props => {
  const { isLoading, results } = props;

  const header =
    results.length > 0 ? `Showing ${results.length} results` : null;

  return (
    <Fragment>
      <List
        header={header}
        loading={isLoading}
        itemLayout="vertical"
        dataSource={results}
        renderItem={item => (
          <ListItem
            actions={[
              <IconText type="star-o" text={item.stargazers_count_formatted} />
            ]}
          >
            <ListItemMeta
              avatar={<Avatar src={item.owner.avatar_url} />}
              title={
                <a href={item.html_url} rel="noopener">
                  {item.name} <small>({item.owner.login})</small>
                </a>
              }
            />
            {item.description}
          </ListItem>
        )}
      />
    </Fragment>
  );
};
