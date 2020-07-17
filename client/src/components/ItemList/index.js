import React from "react";
import { Col, Row, Container } from "../Grid";
import { ListItem } from "../List";

function ItemList({ product, click, Button}) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-6">
                    <p className="font-italic">{product}</p>
                </Col>
                <Col size="md-5">
                    <p className="font-italic">{val}</p>
                </Col>
                <Col size="md-1">
                    <Button />
                </Col>
            </Row>
        </ListItem>
    );

}

export default ItemList