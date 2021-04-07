import React from 'react';
import {Typography} from "antd";
import {Author} from "../../author/Author";
import {Ingredients} from "../../ingredients/Ingredients";
import {YearReward} from "../../yearReward/yearReward";
import {Recipe} from "../../recipe/Recipe";

const {Text, Title, Link} = Typography;

function AdminPage() {
  return (
    <div style={{
      marginTop: "80px",
      marginLeft: "300px",
      paddingBottom: "100px",
    }}>
      <Author/>
      <Ingredients/>
      <YearReward/>
      <Recipe/>
    </div>
  );
}

export default AdminPage;