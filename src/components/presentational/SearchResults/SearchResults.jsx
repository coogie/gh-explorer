import React, { Fragment, PureComponent } from "react";
import { arrayOf, bool, number, shape, string } from "prop-types";
import { List, Avatar, Icon } from "antd";

const ListItem = List.Item;
const ListItemMeta = ListItem.Meta;

const IconText = ({ type, text }) => (
  <Fragment>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </Fragment>
);

export class SearchResults extends PureComponent {
  static propTypes = {
    isLoading: bool,
    results: arrayOf(
      shape({
        name: string,
        html_url: string,
        description: string,
        updated_at: string,
        homepage: string,
        stargazers_count: number,
        stargazers_count_formatted: string,
        owner: shape({
          login: string,
          avatar_url: string,
          html_url: string
        })
      })
    ).isRequired
  };
  static defaultProps = {
    isLoading: false
  };

  render() {
    const { isLoading, results } = this.props;

    const header =
      results.length > 0 ? `Showing ${results.length} results` : null;

    return (
      <Fragment>
        <List
          className="SearchResults__list"
          header={header}
          loading={isLoading}
          itemLayout="vertical"
          dataSource={results}
          renderItem={item => (
            <ListItem
              className="SearchResults__item"
              actions={[
                <IconText
                  type="star-o"
                  text={item.stargazers_count_formatted}
                />
              ]}
            >
              <ListItemMeta
                className="SearchResults__meta"
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
  }
}
