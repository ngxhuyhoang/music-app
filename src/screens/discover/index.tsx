import Navbar from '@components/navbar';
import Spacer from '@components/spacer';
import { appIcon } from '@core/icons';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import useStyle from './styles';

const Discover = () => {
  const styles = useStyle();

  const renderLeading = (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#242433',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={appIcon.search}
        style={{ tintColor: '#fff', width: 16, height: 16 }}
      />
    </TouchableOpacity>
  );

  const renderTrailing = (
    <TouchableOpacity onPress={() => {}} style={{ borderRadius: 10 }}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/40' || '' }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 12,
        }}>
        <Image
          source={{ uri: `https://picsum.photos/40/40?random=${item + 1}` }}
          style={{ width: 40, height: 40, borderRadius: 5 }}
        />
        <Spacer width={8} />
        <View>
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>Title</Text>
          <Text style={{ fontSize: 13, color: '#999' }}>Description</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar
        showLeading={true}
        showTrailing={true}
        renderLeading={renderLeading}
        renderTrailing={renderTrailing}
      />
      <Text
        style={{
          marginHorizontal: 16,
          fontSize: 25,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        Your Weekly Music
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: 16,
          marginBottom: 32,
          marginTop: 8,
          width: 100,
          height: 35,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Text>Listen</Text>
      </TouchableOpacity>
      <FlatList
        data={[...Array(10).keys()]}
        keyExtractor={(_, index) => `${index}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: '50%', height: 2, backgroundColor: 'blue' }} />
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: 'blue',
            borderRadius: 2.5,
          }}
        />
      </View>
      <View
        style={{
          height: 70,
          flexDirection: 'row',
          paddingHorizontal: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://picsum.photos/40/40?random=10' }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Spacer width={16} />
          <View>
            <Text style={{ fontWeight: 'bold', color: '#fff' }}>Title</Text>
            <Text style={{ fontSize: 13, color: '#999' }}>Description</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={appIcon.pause} style={{ tintColor: '#fff' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Discover;
