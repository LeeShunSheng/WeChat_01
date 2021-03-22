package com.spring.dao;

import com.spring.domain.MyEvent;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MyEventDao {
    //创建新的事件
    int creatEvent(MyEvent myEvent);

    //删除事件
    int delEvent(@Param("openid") String openid, @Param("date") String date);

    //更新事件
    int updateEvent(MyEvent myEvent);

    //查询事件
    List<MyEvent> selectEvents(@Param("date") String date, @Param("openid") String openid);
}
