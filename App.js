//import moment from 'moment'; // 2.20.1°
import React from 'react';
import {SectionList, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'; // 2.2.1

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
    };
    this.messageIndex = 0;
    this.messages = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec. Suspendisse sit amet orci sit amet ipsum vehicula varius. Nullam id pellentesque odio',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec. Suspendisse sit amet orci sit amet ipsum vehicula varius',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec. Suspendisse sit amet orci sit amet ipsum vehicula varius. Nullam id pellentesque odio',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec. Suspendisse sit amet orci sit amet ipsum vehicula varius. Nullam id pellentesque odio',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec. Suspendisse sit amet orci sit amet ipsum vehicula varius. Nullam id pellentesque odio',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet viverra felis, sed vulputate elit. Maecenas ante dui, blandit ullamcorper eros in, maximus pellentesque turpis. Maecenas et placerat arcu. Curabitur eu egestas augue. Morbi felis ante, vestibulum in lacus a, iaculis dictum elit. Cras rutrum a tortor eu scelerisque. Maecenas lacinia tortor eros. Maecenas sed neque convallis, porta tellus tempus, vestibulum ipsum. Suspendisse condimentum nisi tellus, at consectetur purus sodales nec. Suspendisse sit amet orci sit amet ipsum vehicula varius. Nullam id pellentesque odio',
    ];
    this.timerHandler = null;
    this.heights = {};
    this.getItemLayout = sectionListGetItemLayout({
      getItemHeight: (rowData, sectionIndex, rowIndex) => {
        return this.heights[rowData.key] ?? 40;
      },
      getSeparatorHeight: () => 0,
      getSectionHeaderHeight: () => 0,
      getSectionFooterHeight: () => 0,
      listHeaderHeight: 0,
    });
    this.listRef = null;
  }

  componentDidMount() {
    this.timerHandler = setInterval(() => {
      if (this.messageIndex <= this.messages.length - 1) {
        const message = {
          id: this.messageIndex,
          message: this.messages[this.messageIndex],
        };

        this.addMessage(message, () => {
          this.messageIndex++;
        });
      }
    }, 100);
  }

  scrollToBottom = () => {
    if (Object.keys(this.heights).length === this.messages.length) {
      this.listRef.scrollToLocation({
        sectionIndex: this.messages.length - 1,
        itemIndex: 0,
        animated: true,
      });
    }
  };

  addMessage = (message, callback = null) => {
    const section = {
      data: [
        {
          key: 'message-' + message.id,
          message: message.message,
          time: Math.floor(new Date().getTime() / 1000),
        },
      ],
      renderItem: this.renderItem,
    };

    this.setState({sections: [...this.state.sections, section]}, () => {
      if (callback) {
        callback();
      }
    });
  };

  onLayoutItem = (e, key) => {
    this.heights[key] = e.nativeEvent.layout.height;
    this.scrollToBottom();
  };

  renderItem = ({item}) => {
    return (
      <View onLayout={e => this.onLayoutItem(e, item.key)} style={{flex: 1}}>
        <Text style={listStyles.time}>{item.key}</Text>
        <View style={listStyles.container}>
          <Text style={listStyles.content}>{item.message}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <SectionList
            ref={ref => (this.listRef = ref)}
            extraData={this.state}
            getItemLayout={this.getItemLayout}
            sections={this.state.sections}
            // sections={[
            //   {
            //     title: 'something',
            //     data: [{ message: 'item1'}],
            //     renderItem: this.renderItem
            //   }
            // ]}
            style={styles.list}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
});
const listStyles = StyleSheet.create({
  container: {
    backgroundColor: '#4DBDFD',
    width: '100.00%',
  },
  content: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 24,
    marginBottom: 10,
    marginRight: 35,
  },
  time: {
    color: '#808080',
    fontSize: 11,
    left: '17.07%',
    width: '74.67%',
    marginBottom: 5,
    textAlign: 'right',
  },
});
