import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardBody } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";

import { getUserById } from "../modules/userManager";

const UserDetails = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getUserById(id).then(setUser);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Card>
            <CardBody>
              <p>{user.fullname}</p>
              <p>{user.displayName}</p>
              <p>{user.email}</p>
              <p>{user.createDateTime}</p>
              <p>{user.userType.name}</p>
              <p></p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
