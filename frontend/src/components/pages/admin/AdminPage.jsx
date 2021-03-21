import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useParams, Link as RouteLink } from "react-router-dom";
import userActions from "../../../ducks/user/actions";
import { Space, Row, Col, Typography } from "antd";
import { Author } from "../../author/Author";
import { Ingredients } from "../../ingredients/Ingredients";

const { Text, Title, Link } = Typography;

function AdminPage() {
    return (
        <div style={{
            marginTop: "80px",
            marginLeft: "300px",
            paddingBottom: "100px",
        }}>
            <Author/>
            <Ingredients/>
        </div>
    );
}

export default AdminPage;