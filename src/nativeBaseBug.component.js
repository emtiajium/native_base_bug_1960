/**
 * Created by emtiaj on 05/31/18.
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  Card,
  CardItem,
  Left,
  Header,
  Title
} from 'native-base';

class NativeBaseBug extends Component {

  render() {

    let location = [
      {
        "name":"Dhanmondi 1 Branch",
        "address":"House - 1/1, Block # A, Asad Gate, Lalmatia, Mirpur Road, Dhanmondi, Dhaka 1207, Bangladesh"
      },
      {
        "name":"Dhanmondi 2 Branch",
        "address":"Science Lab Mor, Plot - 28/A, Holding - 1, Road - 2, Dhanmondi, Dhaka 1205, Bangladesh"
      },
      {
        "name":"Gulshan Branch",
        "address":"Bir Uttam Mir Shawkat Sarak, Tejgaon Link Road, 204/B-5, Gulshan, Dhaka 1208, Bangladesh"
      },
      {
        "name":"Uttara Flagship Store",
        "address":"7, Jashimuddin Avenue, Uttara, Dhaka 1230, Bangladesh"
      },
      {
        "name":"Moghbazar Branch",
        "address":"Outer Circuler Road, 61, Moghbazar, Dhaka 1217, Bangladesh"
      },
      {
        "name":"Jamuna Future Park Branch",
        "address":"Basundhara Road, NSU Main Campus Road Dhaka 1229, Bangladesh"
      },
      {
        "name":"Banani Branch",
        "address":"Concord Modhumoti Plaza, Plot - 11, Road - 11, Block - G, Banani, Dhaka 1213, Bangladesh"
      },
      {
        "name":"Mirpur Branch",
        "address":"Zoo Rd, Plot # 1, Block # G, Section # 1, Mirpur Dhaka 1216, Bangladesh"
      },
      {
        "name":"Wari Branch",
        "address":"41, AK Famous Tower , Rankin Street, Wari, Dhaka 1203, Bangladesh"
      },
      {
        "name":"Bashabo Branch",
        "address":"1/Gha, Central Bashabo (At The Same Premises As Agamon Cinema Hall)  Dhaka 1214, Bangladesh"
      },
      {
        "name":"Bashundhara City Branch",
        "address":"18 Garden Road, Panthapath, Dhaka 1215, Bangladesh"
      },
      {
        "name":"Narayangonj Branch",
        "address":"136, Bangabondhu Sarak, Ukil Para Narayanganj 1400, Bangladesh"
      },
      {
        "name":"Khulna Branch",
        "address":"Eden Plaza, 18/A KDA New Market C/A, Khulna 9100, Bangladesh"
      },
      {
        "name":"Sylhet Branch",
        "address":"413 Nayasarak Road, Sylhet 3100, Bangladesh"
      },
      {
        "name":"Bogra Branch",
        "address":"7/A, Runner Plaza, Nobab Bari Road, Bogra 5800, Bangladesh"
      },
      {
        "name":"Comilla Branch",
        "address":"565/502, Nazrul Avenue, Ranir Bazar, Comilla 3500, Bangladesh"
      },
      {
        "name":"Halishahar Branch",
        "address":"Lane # 1, Road # 1, House # 1, Block # L, Halishahar H/A, Chittagong 4100, Bangladesh"
      },
      {
        "name":"Sholoshahar Branch",
        "address":"Biman Bhaban, 1/2, CDA Avenue, Sholoshahar, Chittagong 4203, Bangladesh"
      }
    ];

    return (
      <Container>
        <Header>
          <Left>
            <Title>{'Native Base Bug'}</Title>
          </Left>
        </Header>

        <Content padder={true}>
          <Card>

            <CardItem>
              <Left>
                <Text style={styles.boldText}>{'Location'}</Text>
              </Left>
            </CardItem>

            <CardItem>
              <Left>
                <List
                  dataArray={location}
                  renderRow={ (eachLocation) => {
                    return (
                      <Content>
                        <CardItem bordered={true}>
                          <Text>{eachLocation.name}</Text>
                        </CardItem>

                        <CardItem button={true}>
                          <Text style={styles.link}>{eachLocation.address}</Text>
                        </CardItem>
                      </Content>
                    );
                  }}
                />
              </Left>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold'
  },
  link: {
    color: '#1e6bd5'
  }
});

export default NativeBaseBug;
