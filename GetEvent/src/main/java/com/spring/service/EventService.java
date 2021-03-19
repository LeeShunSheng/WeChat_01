package com.spring.service;

import com.spring.domain.MyEvent;

import java.util.List;

public interface EventService {
    //查看所有事件
    List<MyEvent> getAllEvents();
    //删除指定事件
    int delOneEvent(String date);
    //更新指定事件
    int updateOneEvent(MyEvent myEvent);
    //创建新的事件
    int createOneEvent(MyEvent myEvent);
}
