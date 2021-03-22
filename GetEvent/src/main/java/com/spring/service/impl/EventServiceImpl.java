package com.spring.service.impl;

import com.spring.dao.MyEventDao;
import com.spring.domain.MyEvent;
import com.spring.service.EventService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Resource
    private MyEventDao myEventDao;
    //查询所有事件
    @Override
    public List<MyEvent> getAllEvents(String date, String openid) {
        return myEventDao.selectEvents(date, openid);
    }

    //删除指定事件
    @Override
    public int delOneEvent(String openid, String date) {
        return myEventDao.delEvent(openid, date);
    }

    //更新指定事件
    @Override
    public int updateOneEvent(MyEvent myEvent) {
        return myEventDao.updateEvent(myEvent);
    }

    //创建一个事件
    @Override
    public int createOneEvent(MyEvent myEvent) {
        return myEventDao.creatEvent(myEvent);
    }
}
