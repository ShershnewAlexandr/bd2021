import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Typography, Spin, Collapse } from "antd";
import yearRewardActions from "../../ducks/yearReward/actions";
import { YearRewardForm } from "./yearRewardForm";
import "./yearReward.scss";

const { Text, Title} = Typography;
const { Panel } = Collapse;

function YearReward(props) {
  const dispatch = useDispatch();
  const yearRewards = useSelector((state) => (state.yearRewards.yearRewards));
  React.useEffect(() => {
    dispatch(yearRewardActions.getYearRewardRequest());
  }, []);

  return (
    <div className={"yearReward_container"}>
      <Title>Награды года</Title>
      {yearRewards === null ? (
        <Spin size={"large"}/>
      ) : (
        <div>
          {yearRewards?.length && (
            <Collapse>
              {yearRewards.map((yearReward) => {
                let comment;
                try {
                  comment = JSON.parse(yearReward.description)?.comment
                } catch (e) {}

                return (
                  <Panel header={`${yearReward.date} на сумму ${yearReward.grandSum}$ проголосовало ${yearReward.voterCount} страна - ${yearReward.country} ${comment ?? ''}`} key={yearReward._id}>
                    <YearRewardForm
                      yearReward={yearReward}
                      buttonName={'update'}
                      onSubmitAction={yearRewardActions.updateYearRewardRequest}
                      onDeleteAction={yearRewardActions.deleteYearRewardRequest}
                    />
                  </Panel>
                );
              })}
            </Collapse>
          )}
          <hr/>
          <YearRewardForm
            onSubmitAction={yearRewardActions.addYearRewardRequest}
          />
        </div>
      )}
    </div>
  );
}

export { YearReward };
